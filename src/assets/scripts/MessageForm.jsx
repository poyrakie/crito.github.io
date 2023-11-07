import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'


const MessageForm = () => {

    // skapar variablar för diverse regex checkar
    const nameRegEx = new RegExp(/^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/)
    const emailRegEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)

    // skapar tom errormessage för senare användning
    const [errorMessage, setErrorMessage] = useState('')

    // använder importerad formik att skapa tomma variablar
    const form = useFormik( {
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        // använder importerad Yup för att validera och returna errors eller ej
        validationSchema: Yup.object( {
            name: Yup.string()
                .required("Name is required")
                .min(2, "Name must consist of 2 letters or more")
                .matches(nameRegEx, "The name you provide must be a valid name"),
            email: Yup.string()
                .required("Email is required")
                .matches(emailRegEx, "You must provide a valid email"),
            message: Yup.string()
                .required("Message cannot be empty")
                .min(2, "Message must consist of 2 letters or more")
                .max(450, "Your message must be less then 450 characters")
        }),

        // skapar function för att submita resultatet
        onSubmit: async (values) => {
            // postar contentet från formen
            const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            // switch-case för status från apiet
            switch (result.status) {
                case 200:
                    // skriver ut till användaren att meddelandet skickats, visas i 5 sekunder
                    setErrorMessage('Your message have been sent successfully, thanks for contacting crito!')
                    setTimeout(() => {setErrorMessage('')}, 5000)
                    break;
                case 400:
                    // skriver ut till användaren att det inte gick så bra att skicka, visas i 5 sekunder
                    setErrorMessage('Something went wrong.')
                    setTimeout(() => {setErrorMessage('')}, 5000)
                    break;
            }
        }
    })

    // returnar formen så att den kan importeras med all validering och dylikt på annan plats
  return (
    <form onSubmit={form.handleSubmit} noValidate>
        <span>{errorMessage}</span>
        <label htmlFor="formName" className={form.touched.name && form.errors.name ? 'error' : ''}>{form.touched.name && form.errors.name ? form.errors.name : 'Name'}</label><br></br>
        <input 
            id="formName" 
            type="text" 
            name="name" 
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder="Name*" /><br></br>
        
        <label htmlFor="formEmail" className={form.touched.email && form.errors.email ? 'error' : ''}>{form.touched.email && form.errors.email ? form.errors.email : 'Email'} </label><br></br>
        <input 
            id="formEmail" 
            type="email" 
            name="email" 
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder="Email" /><br></br>
        
        <label htmlFor='formMessage' className={form.touched.message && form.errors.message ? 'error' : ''}>{form.touched.message && form.errors.message ? form.errors.message : 'Your Message'} </label><br></br>
        <textarea
            id="formMessage" 
            type="text" 
            name='message'
            value={form.values.message}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder="Your Message"></textarea>
        
        <button type='submit' className="btn-yellow" >Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
    </form>
  )
}

export default MessageForm