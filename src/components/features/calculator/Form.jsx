import styles from './styles/form.module.css';
import { MIN_TENOR } from './calcConfig';
import Button from '@/components/Button';

function Form({ products, formActions, onSubmit, state }) {
  const { register, handleSubmit, errors, handleReset } = formActions;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Fields
        data={products}
        type="select"
        id="product"
        defaultValue={null}
        label="Select Product"
        formActions={{ register, errors }}
      />
      <Fields
        data={null}
        type="number"
        id="amount"
        defaultValue={''}
        label="Enter Amount"
        formActions={{ register, errors }}
      />
      <Fields
        data={null}
        type="number"
        id="tenor"
        defaultValue={MIN_TENOR}
        min={MIN_TENOR}
        label="Enter Tenor (in days)"
        formActions={{ register, errors }}
      />
      <div className={styles.buttonWrapper}>
        <Button variant="primary" type="submit">
          Calculate
        </Button>
        <Button variant="link-light" onClick={() => handleReset()}>
          Reset
        </Button>
      </div>
    </form>
  );
}

function Fields({ data, type, id, label, formActions, defaultValue, min }) {
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
          {...register(id, {
            required: 'This field is required',
            validate: (value) => value !== '',
          })}
        >
          {data.map((element) => (
            <option value={element} key={element}>
              {element}
            </option>
          ))}
        </select>
      )}
      {type === 'number' && (
        <input
          type={type}
          id={id}
          defaultValue={defaultValue}
          min={min}
          className={styles.input}
          {...register(id, {
            required: 'This field is required',
            validate: (value) => value !== '',
          })}
        />
      )}
      {errorMessage && <p className={styles.warning}>{errorMessage}</p>}
    </fieldset>
  );
}

export default Form;
