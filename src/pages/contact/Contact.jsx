import Button from '@/components/Button';
import styles from './styles/contact.module.css';
import { useForm } from 'react-hook-form';
import { useContactUs } from '@/hooks/useContact';
import Loader from '@/components/Loader';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PiCheckCircleFill, PiSealWarningFill } from 'react-icons/pi';
import { useRouter } from 'next/router';
import { scaleUpSlow } from '@/utils/anim';

function ContactForm() {
  const router = useRouter();

  const { status } = router.query;

  return <main className={styles.main}>{status ? <Message /> : <Form />}</main>;
}

function Form() {
  const { contactUs, isSubmitting } = useContactUs();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    const newData = {
      subject: 'Contact Form Submission',
      data,
    };
    contactUs(newData);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <label htmlFor="fullname">Your name</label>
        <input
          type="text"
          id="fullname"
          placeholder="Jane Doe"
          {...register('fullname', { required: 'This field is required' })}
        />
        {errors.fullname && <p>{errors.fullname.message}</p>}
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          placeholder="j.doe@example.com"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          placeholder="Your message goes here"
          {...register('message', { required: 'This field is required' })}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </fieldset>
      <div className={styles.btnWrapper}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="link-light" onClick={() => reset()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

function Message() {
  const router = useRouter();
  const { status } = router.query;

  const ref = useRef();
  const inView = useInView(ref, { once: true });

  const isSuccess = status === 'success';
  const message = isSuccess
    ? "Your form has been submitted successfully! We'd be in touch soon"
    : 'There was an error submitting your form. Please try again';
  const icon = isSuccess ? <PiCheckCircleFill /> : <PiSealWarningFill />;

  return (
    <div className={styles.messageContainer}>
      <div className={styles.messageBox}>
        <motion.div
          className={styles.message}
          variants={scaleUpSlow}
          ref={ref}
          initial="initial"
          animate={inView ? 'visible' : 'initial'}
        >
          <p className={isSuccess ? styles.successIcon : styles.failIcon}>
            {icon}
          </p>
          <p className={styles.messageParagraph}>{message}</p>
          <Button
            variant="tertiary-reverse"
            onClick={() =>
              isSuccess ? router.push('/') : router.push('/contact')
            }
          >
            Go {isSuccess ? 'home' : 'back'}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
