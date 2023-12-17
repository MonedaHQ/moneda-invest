import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { useProducts } from '@/hooks/useProducts';
import { useRegisterInvestor } from '@/hooks/useRegisterInvestor';

import Loader from '@/components/Loader';
import Button from '@/components/Button';

import styles from './styles/form.module.css';

function Form() {
  const router = useRouter();
  const { isLoading, data } = useProducts();
  const { registerInvestor, isLoading: isSubmitting } = useRegisterInvestor();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  const products = data.map((product) => product.name);

  let type;
  if (router.query.type) {
    type = router.query.type;
  } else {
    type = 'corporate';
  }

  function onSubmit(formData) {
    const productId = data.find(
      (product) => product.name === formData.product_id
    )?.id;
    if (formData.investor_type === 'corporate') {
      delete formData.date_of_birth;
    }
    const formInput = {
      ...formData,
      product_id: productId,
      investment_type: type,
      business_type: data.business_type.toLowerCase().includes('ltd') ? 'ltd' : data.business_type.toLowerCase(),
    };

    registerInvestor(formInput);
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {type === 'corporate' ? (
          <CorporateForm
            formActions={{ register, errors }}
            products={products}
          />
        ) : (
          <IndividualForm
            formActions={{ register, errors }}
            products={products}
          />
        )}
        <div className={styles.buttonContainer}>
          <Button variant="primary" type="submit">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          <Button variant="link-light" onClick={() => reset()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

function CorporateForm({ formActions, products }) {
  const businessType = ['Business name', 'LTD Liability'];
  return (
    <>
      <div className={styles.fields}>
        <Fields
          type="text"
          id="company"
          label="Company Name"
          formActions={formActions}
          placeholder="Your company name"
        />
        <Fields
          data={businessType}
          type="select"
          id="business_type"
          label="Type of Business"
          formActions={formActions}
          placeholder="Your company name"
          defaultValue={businessType.at(0)}
        />
        <Fields
          type="text"
          id="residential_address"
          label="Residential Address"
          formActions={formActions}
          placeholder=""
        />
        <Fields
          data={products}
          type="select"
          id="product_id"
          label="Preferred Product"
          formActions={formActions}
          defaultValue={products.at(0)}
        />
      </div>
      <div className={styles.fieldsContainer}>
        <h4>Primary Contact Person</h4>
        <div className={styles.fields}>
          <Fields
            type="text"
            id="first_name"
            label="First name"
            formActions={formActions}
            placeholder="John"
          />
          <Fields
            type="text"
            id="last_name"
            label="Last name"
            formActions={formActions}
            placeholder="Doe"
          />

          <Fields
            type="email"
            id="email"
            label="E-mail"
            formActions={formActions}
            placeholder="johndoe@example.com"
          />
          <Fields
            type="phone"
            id="phone_number"
            label="Phone Number"
            formActions={formActions}
            placeholder="+234 012 2345 345"
            required={false}
          />
        </div>
      </div>
    </>
  );
}

function IndividualForm({ formActions, products }) {
  return (
    <>
      <div className={styles.fields}>
        <Fields
          type="text"
          id="first_name"
          label="First name"
          formActions={formActions}
          placeholder="John"
        />
        <Fields
          type="text"
          id="last_name"
          label="Last name"
          formActions={formActions}
          placeholder="Doe"
        />
        <Fields
          type="email"
          id="email"
          label="E-mail"
          formActions={formActions}
          placeholder="johndoe@example.com"
        />
        <Fields
          type="phone"
          id="phone_number"
          label="Phone Number"
          formActions={formActions}
          placeholder="+234 012 2345 345"
          required={false}
        />
        <Fields
          type="text"
          id="nationality"
          label="Nationality"
          formActions={formActions}
          placeholder=""
        />
        <Fields
          type="text"
          id="occupation"
          label="Occupation"
          formActions={formActions}
          placeholder=""
        />
        <Fields
          type="text"
          id="residential_address"
          label="Residential Address"
          formActions={formActions}
          placeholder=""
        />
        <Fields
          type="text"
          id="company"
          label="Company Name"
          formActions={formActions}
          placeholder="Your company name"
        />
        <Fields
          type="date"
          id="date_of_birth"
          label="Date of birth"
          formActions={formActions}
          placeholder=""
        />
        <Fields
          data={products}
          type="select"
          id="product_id"
          label="Preferred Product"
          formActions={formActions}
          defaultValue={products.at(0)}
        />
      </div>
    </>
  );
}

function Fields({
  data,
  type,
  id,
  label,
  formActions,
  defaultValue,
  placeholder,
  required = true,
}) {
  const { register, errors } = formActions;
  const error = errors[id];
  const errorMessage = error?.message || null;

  return (
    <fieldset className={styles.fieldset}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {data && type === 'select' && (
        <select
          className={styles.select}
          id={id}
          defaultValue={defaultValue}
          {...register(id, {
            required: required ? 'This field is required' : null,
            validate: required ? (value) => value !== '' : null,
          })}
        >
          {data.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
        </select>
      )}
      {(type === 'text' ||
        type === 'email' ||
        type === 'phone' ||
        type === 'date') && (
        <input
          type={type}
          id={id}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={styles.input}
          {...register(id, {
            required: required ? 'This field is required' : null,
            validate: required ? (value) => value !== '' : null,
            pattern:
              type === 'email'
                ? {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please provide a valid email',
                  }
                : null,
          })}
        />
      )}
      {errorMessage && <p className={styles.warning}>{errorMessage}</p>}
    </fieldset>
  );
}

export default Form;
