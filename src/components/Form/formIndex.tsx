import React, { useState, ChangeEvent, FormEvent } from 'react';

export const Form = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [errors, setErrors] = useState<{ name: string, email: string, phone: string }>({ name: '', email: '', phone: '' });

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhone = (phone: string): boolean => {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let valid = true;
        let errors = { name: '', email: '', phone: '' };

        if (name.trim() === '') {
            errors.name = 'El nombre es requerido';
            valid = false;
        }

        if (!validateEmail(email)) {
            errors.email = 'El correo electrónico no es válido';
            valid = false;
        }

        if (!validatePhone(phone)) {
            errors.phone = 'El teléfono debe tener 10 dígitos';
            valid = false;
        }

        setErrors(errors);

        if (valid) {
            // Aquí puedes manejar el envío del formulario
            console.log('Formulario válido, enviando...');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <small>REGISTRATE AQUÍ:</small>
            <label>
                <div className="inputContainer">
                    Nombre
                    <input
                        type="text"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                </div>   
                {errors.name && <span>{errors.name}</span>}
            </label>
            <label>
                <div className="inputContainer">
                    Correo electrónico
                    <input
                        type="text"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                </div>
                {errors.email && <span>{errors.email}</span>}
            </label>
            <label>
                <div className="inputContainer">
                    Teléfono
                    <input
                        type="text"
                        value={phone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    />
                </div>
                {errors.phone && <span>{errors.phone}</span>}
            </label>
            <button type='submit'>Enviar</button>
        </form>
    );
};

export default Form;
