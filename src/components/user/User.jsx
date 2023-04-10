export const User = ({user: {name, email}}) => {
    return (
        <>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        </>
    )
}