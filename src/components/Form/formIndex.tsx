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
                Nombre
                <div className="errorContainer">
                    <input
                        type="text"
                        value={name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        className={errors.name ? 'invalid' : ''}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>   
            </label>
            <label>
                Correo electrónico
                <div className="errorContainer">
                    <input
                        type="text"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className={errors.name ? 'invalid' : ''}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
            </label>
            <label>
                Teléfono
                <div className="errorContainer">
                    <input
                        type="text"
                        value={phone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                        className={errors.name ? 'invalid' : ''}
                    />
                    {errors.phone && <span>{errors.phone}</span>} 
                </div> 
            </label>
            <button type='submit'>Enviar</button>
        </form>
    );
};

export default Form;
