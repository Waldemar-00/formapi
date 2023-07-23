import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
const Input = ({ label, ...rest }) => {
  const [field, meta] = useField(rest)
  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  )
}
const FormLaconically = () => {
  // const formik = useFormik({
    // initialValues: {
      // name: '',
      // email: '',
      // amount: '',
      // currency: '',
      // text: '',
      // terms: false
    // },
    // validate,
    // validationSchema: Yup.object({
      // name: Yup.string().min(2, 'Minimum two symbols!').required('This field is requered'),
      // email: Yup.string().email('This email is invalid').required('This field is requered'),
      // amount: Yup.number().integer().min(5, 'Minimum 5!').required('This field is requered'),
      // currency: Yup.string().required(),
      // text: Yup.string().min(10, 'Minimum 10 chars'),
      // terms: Yup.boolean().required('Need agree').oneOf([true], 'Need agree')
// 
    // }),
    // onSubmit: values => (console.log(JSON.stringify(values, null, 2))),
  // })
  
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        amount: '',
        currency: '',
        text: '',
        terms: false
      }}
      validationSchema={ Yup.object({
        name: Yup.string().min(2, 'Minimum two symbols!').required('This field is requered'),
        email: Yup.string().email('This email is invalid').required('This field is requered'),
        amount: Yup.number().integer().min(5, 'Minimum 5!').required('This field is requered'),
        currency: Yup.string().required(),
        text: Yup.string().min(10, 'Minimum 10 chars'),
        terms: Yup.boolean().required('Need agree').oneOf([true], 'Need agree')

      })}
      onSubmit= {values => (console.log(JSON.stringify(values, null, 2)))}
    >
        <Form className="form" autoComplete='on'>
            <h2>Отправить пожертвование</h2>
            <Input
              label='Ваше имя' 
              id="name"
              name="name"
              type="text"
              />
            <label htmlFor="email">Ваша почта</label>
            <Field
                id="email"
                name="email"
                type="email"
            />
            <ErrorMessage className='error' name='email' component='div'/>
            <label htmlFor="amount">Количество</label>
            <Field
                autoComplete='off'
                id="amount"
                name="amount"
                type="number"
            />
            <ErrorMessage className='error' name='amount' component='div'/>
            <label htmlFor="currency">Валюта</label>
            <Field
                id="currency"
                name="currency"
                as='select'
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </Field>
            <ErrorMessage className='error' name='currency' component='div'/>
            <label htmlFor="text">Ваше сообщение</label>
            <Field 
              id="text"
              name="text"
              as='textarea'
            />
            <ErrorMessage className='error' name='text' component='div'/>
            <label className="checkbox">
                <Field name="terms" type="checkbox"
                />
                Соглашаетесь с политикой конфиденциальности? 
            </label>
            <ErrorMessage className='error' name='terms' component='div'/>
            <button type="submit">Отправить</button>
        </Form>
      </Formik>
    )
}

export default FormLaconically;