function FormInput({ name, label, value, onChange, type }) {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            <input type={type} value={value} onChange={onChange} name={name} id={name} />
        </div>
    )
}

export default FormInput