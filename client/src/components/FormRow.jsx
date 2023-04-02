const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">{labelText || name}</label> {/* if labeltext passed in then other components access labeltext from this components otherwise it shows the name */}

            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className="form-input"
            />
        </div>
    )
}
export default FormRow