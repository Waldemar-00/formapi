import { useFormik } from 'formik'
import * as Yup from 'yup'

// const validate = values => {
  // const errors = {}
  // if (!values.name) errors.name = 'This is requered field'
  // else if(values.name.length < 2) errors.name = 'This name is too short'
  // if (!values.email) errors.email = 'This is requered field'
  // else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) errors.email = 'This email is invalid'
  // return errors
// }
const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      amount: '',
      currency: '',
      text: '',
      terms: false
    },
    // validate,
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Minimum two symbols!').required('This field is requered'),
      email: Yup.string().email('This email is invalid').required('This field is requered'),
      amount: Yup.number().integer().min(5, 'Minimum 5!').required('This field is requered'),
      currency: Yup.string().required(),
      text: Yup.string().min(10, 'Minimum 10 chars'),
      terms: Yup.boolean().required('Need agree').oneOf([true], 'Need agree')

    }),
    onSubmit: values => (console.log(JSON.stringify(values, null, 2))),
  })
  
    return (
        <form className="form" onSubmit={formik.handleSubmit} autocomplete='on'>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                {...formik.getFieldProps('name')}
              />
            {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
            <label htmlFor="amount">Количество</label>
            <input
                autocomplete='off'
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div className='error'>{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
        </select>
        {formik.errors.currency && formik.touched.currency ? <div className='error'>Change a currency!</div> : null}
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div className='error'>Minimum 10 chars!</div> : null}
            <label className="checkbox">
                <input name="terms" type="checkbox"
                value={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                Соглашаетесь с политикой конфиденциальности? 
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className='error'>'Need agree'!</div> : null}
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;