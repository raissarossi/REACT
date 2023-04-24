const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }
    return ( 
        <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
            <input type="text" required placeholder="Name" className="alura-input" />
            <input type="email" required placeholder="Email" className="alura-input" />
            {/* <button type="submit" className="hover:animate-pulse w-full max-w-sm bg-alura-100 dark:bg-alura-200 rounded-full text-dark-100 dark:text-gray-200 uppercase py-1 px-5">Send</button> */}
            <button type="submit" className="alura-button">Seguir</button>
        </form>
     );
}
 
export default Form;