import React, { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
    const [language, setLanguage] = useState('en')

    const [form, setForm] = useState({
        name: '',
        email: '',
        favoriteDish: '',
        foodRating: '',
        serviceRating: '',
        tasteSatisfaction: '',
        spiceLevel: '',
        valueForQuantity: '',
        foodVariety: '',
        foodWastage: '',
        wastageDetails: '',
        comments: '',
    });

    const [focusedInput, setFocusedInput] = useState(null);

    // Language-dependent labels and placeholders
    const labels = {
        en: {
            name: "Name",
            email: "Email (optional)",
            favoriteDish: "Favorite Dish",
            foodRating: "Food Quality",
            serviceRating: "Service",
            tasteSatisfaction: "Taste Satisfaction",
            spiceLevel: "Spice Level",
            valueForQuantity: "Value for Quantity",
            foodVariety: "Food Variety",
            foodWastage: "Food Wastage",
            wastageDetails: "If yes, please explain",
            comments: "Additional Comments",
            submit: "Submit Feedback",
            chooseRating: "Choose rating",
            chooseSpice: "Choose spice level",
            chooseVariety: "Choose food variety",
            yes: "Yes",
            no: "No",
        },
        ta: {
            name: "பெயர்",
            email: "மின்னஞ்சல் (விருப்பம்)",
            favoriteDish: "பிடித்த உணவு",
            foodRating: "உணவின் தரம்",
            serviceRating: "சேவை",
            tasteSatisfaction: "உணவின் சுவை",
            spiceLevel: "காரம் அளவு",
            valueForQuantity: "மதிப்பு மற்றும் அளவு",
            foodVariety: "உணவு வகைகள்",
            foodWastage: "உணவு வீண்",
            wastageDetails: "ஆம் என்றால், விளக்கவும்",
            comments: "கூடுதல் கருத்துக்கள்",
            submit: "கருத்தை அனுப்பு",
            chooseRating: "மதிப்பீடு தேர்வு செய்யவும்",
            chooseSpice: "காரம் அளவு தேர்வு செய்யவும்",
            chooseVariety: "உணவு வகை தேர்வு செய்யவும்",
            yes: "ஆம்",
            no: "இல்லை",
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://pothu-catering-qlgu.onrender.com/submit-feedback', form);
            alert(language === 'en' ? 'Thank you for your feedback!' : 'உங்கள் கருத்துக்கு நன்றி!');
            setForm({
                name: '',
                email: '',
                favoriteDish: '',
                foodRating: '',
                serviceRating: '',
                tasteSatisfaction: '',
                spiceLevel: '',
                valueForQuantity: '',
                foodVariety: '',
                foodWastage: '',
                wastageDetails: '',
                comments: '',
            });
        } catch (err) {
            alert(language === 'en' ? 'Failed to send feedback. Please try again.' : 'கருத்து அனுப்பப்படவில்லை. மீண்டும் முயற்சிக்கவும்.');
        }
    };

    // Container
    const containerStyle = {
        maxWidth: 700,
        margin: '60px auto',
        padding: '50px 40px',
        borderRadius: 30,
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1.5px solid rgba(255, 255, 255, 0.3)',
        fontFamily: "'Poppins', sans-serif",
        color: '#1c1c1c',
        transition: 'all 0.4s ease',
        animation: 'fadeIn 0.8s ease-out',
        boxShadow: `
            inset 0 0 30px rgba(255, 255, 255, 0.25),
            0 10px 35px rgba(0, 0, 0, 0.2)
            `,
    };

    const headingStyle = {
        fontSize: '2.8rem',
        fontWeight: 'bold',
        color: '#4a90e2',
        textAlign: 'center',
        marginBottom: '8px',
        marginTop: '-20px',
        userSelect: 'none',
        textShadow: '0 1px 3px rgba(0,0,0,0.1)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    };

    if (window.innerWidth <= 480) {
        headingStyle.fontSize = '1.8rem'; // smaller font for mobile
      }

    const underlineStyle = {
        height: '4px',
        width: '120px',
        margin: '0 auto',
        borderRadius: '3px',
        background: 'linear-gradient(to right, transparent, #4a90e2, transparent)',
        opacity: 0.8,
    };
    
    // Input Base
    const inputBaseStyle = {
        appearance: 'none',        // Hide native arrow
        WebkitAppearance: 'none',  // Safari
        MozAppearance: 'none',     // Firefox
        marginTop: 10,
        marginBottom: 20,
        width: '100%',
        padding: '14px 12px',
        fontSize: 18,
        border: '2px solid rgb(199, 199, 199)',
        background: 'transparent',
        outline: 'none',
        color: '#1c1c1c',
        borderRadius: 6,
        transition: 'border 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
        // NOTE: ::placeholder won't apply here. Handle in CSS if needed.
    };
    
    const inputFocusStyle = {
        border: '2px solid #4a90e2',
        boxShadow: '0 0 8px 2px rgba(74, 144, 226, 0.4)', // soft blue glow
        // ::placeholder still not valid here
    };
    
    const labelStyle = {
        display: 'block',
        fontWeight: 700,
        fontSize: 20,
        color: '#1a3d7c', // dark blue label
        marginBottom: 12,
        userSelect: 'none',
        letterSpacing: '0.8px',
        textShadow: '0 1px 2px rgba(0,0,0,0.05)',
    };
    

    // Radio Label
    const radioLabelStyle = {
        display: 'inline-block',
        marginRight: 25,
        fontWeight: 500,
        fontSize: '16px',
        color: '#444',
        cursor: 'pointer',
        userSelect: 'none',
        padding: '8px 16px',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        boxShadow: `
            inset 1px 1px 3px rgba(0,0,0,0.1), 
            inset -1px -1px 3px rgba(255,255,255,0.6)
            `,
        transition: 'all 0.25s ease',
    };

    // Button

    const [hover, setHover] = useState(false);

    const buttonStyle = {
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        width: '100%',
        padding: '16px 0',
        fontSize: '20px',
        fontWeight: 'bold',
        borderRadius: '30px',
        border: 'none',
        background: 'linear-gradient(to right, #3a8ef8, #6faae7)',
        color: '#fff',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hover
            ? '0 8px 20px rgba(58, 142, 248, 0.4)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>👩‍🍳 Pothu's Catering</h2>
            <div style={underlineStyle}></div>
            <div style={{ marginBottom: 20, marginTop: 15, textAlign: 'center'}}>
                <label style={radioLabelStyle}>
                    <input
                        type="radio"
                        name="language"
                        value="en"
                        checked={language === 'en'}
                        onChange={() => setLanguage('en')}
                    />
                    English
                </label>
                <label style={radioLabelStyle}>
                    <input
                        type="radio"
                        name="language"
                        value="ta"
                        checked={language === 'ta'}
                        onChange={() => setLanguage('ta')}
                    />
                    தமிழ்
                </label>
            </div>
            <form onSubmit={handleSubmit} autoComplete="off">
                {/* Name */}
                <label style={labelStyle}>
                    {labels[language].name}
                </label>
                <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        ...(focusedInput === 'name' ? inputFocusStyle : {}),
                    }}
                />

                {/* Email */}
                <label style={labelStyle}>
                    {labels[language].email}
                </label>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        ...(focusedInput === 'email' ? inputFocusStyle : {}),
                    }}
                />

                {/* Favorite Dish */}
                <label style={labelStyle}>
                    {labels[language].favoriteDish}
                </label>
                <input
                    name="favoriteDish"
                    type="text"
                    value={form.favoriteDish}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('favoriteDish')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        ...(focusedInput === 'favoriteDish' ? inputFocusStyle : {}),
                    }}
                />

                {/* Food Quality */}
                <label htmlFor="foodRating" style={labelStyle}>
                    {labels[language].foodRating}
                </label>
                <select
                    id="foodRating"
                    name="foodRating"
                    value={form.foodRating}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedInput('foodRating')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        cursor: 'pointer',
                        ...(focusedInput === 'foodRating' ? inputFocusStyle : {}),
                    }}
                >
                    <option value="" disabled>
                        {labels[language].chooseRating}
                    </option>
                    <option value="🤮 Bad">{language === 'en' ? '🤮 Bad' : '🤮 மோசம்'}</option>
                    <option value="😐 Okay">{language === 'en' ? '😐 Okay' : '😐 சரி'}</option>
                    <option value="😊 Good">{language === 'en' ? '😊 Good' : '😊 நல்லது'}</option>
                    <option value="😋 Tasty">{language === 'en' ? '😋 Tasty' : '😋 ருசிகரமானது'}</option>
                    <option value="🤤 Delicious">{language === 'en' ? '🤤 Delicious' : '🤤 சுவையானது'}</option>
                </select>

                {/* Service */}
                <label htmlFor="serviceRating" style={labelStyle}>
                    {labels[language].serviceRating}
                </label>
                <select
                    id="serviceRating"
                    name="serviceRating"
                    value={form.serviceRating}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedInput('serviceRating')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        cursor: 'pointer',
                        ...(focusedInput === 'serviceRating' ? inputFocusStyle : {}),
                    }}
                >
                    <option value="" disabled>
                        {labels[language].chooseRating}
                    </option>
                    <option value="😠 Poor">{language === 'en' ? '😠 Poor' : '😠 மோசமானது'}</option>
                    <option value="😐 Average">{language === 'en' ? '😐 Average' : '😐 சராசரி'}</option>
                    <option value="🙂 Good">{language === 'en' ? '🙂 Good' : '🙂 நல்லது'}</option>
                    <option value="😄 Excellent">{language === 'en' ? '😄 Excellent' : '😄 சிறந்தது'}</option>
                    <option value="🤩 Amazing">{language === 'en' ? '🤩 Amazing' : '🤩 அற்புதம்'}</option>
                </select>

                {/* Taste Satisfaction (Select with emojis) */}
                <label htmlFor="tasteSatisfaction" style={labelStyle}>{labels[language].tasteSatisfaction}</label>
                <select
                    id="tasteSatisfaction"
                    name="tasteSatisfaction"
                    value={form.tasteSatisfaction}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedInput('tasteSatisfaction')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        cursor: 'pointer',
                        ...(focusedInput === 'tasteSatisfaction' ? inputFocusStyle : {}),
                    }}
                >
                    <option value="" disabled>{labels[language].chooseRating}</option>
                    <option value="🙂 Good">{language === 'en' ? '🙂 Good' : '🙂 நல்லது'}</option>
                    <option value="😄 Excellent">{language === 'en' ? '😄 Excellent' : '😄 சிறந்தது'}</option>
                    <option value="🤩 Amazing">{language === 'en' ? '🤩 Amazing' : '🤩 அற்புதம்'}</option>
                </select>

                {/* Spice Level (Select with emojis) */}
                <label htmlFor="spiceLevel" style={labelStyle}>{labels[language].spiceLevel}</label>
                <select
                    id="spiceLevel"
                    name="spiceLevel"
                    value={form.spiceLevel}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedInput('spiceLevel')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        cursor: 'pointer',
                        ...(focusedInput === 'spiceLevel' ? inputFocusStyle : {}),
                    }}
                >
                    <option value="" disabled>{labels[language].chooseSpice}</option>
                    <option value="🌶️ Mild">{language === 'en' ? '🌶️ Mild' : '🌶️ லேசானது'}</option>
                    <option value="🌶️🌶️ Medium">{language === 'en' ? '🌶️🌶️ Medium' : '🌶️🌶️ நடுத்தரமாக'}</option>
                    <option value="🌶️🌶️🌶️ Hot">{language === 'en' ? '🌶️🌶️🌶️ Hot' : '🌶️🌶️🌶️ காரமாக'}</option>
                    <option value="🌶️🌶️🌶️🌶️ Extra Hot">{language === 'en' ? '🌶️🌶️🌶️🌶️ Extra Hot' : '🌶️🌶️🌶️🌶️ மிகக் காரமாக'}</option>
                </select>

                {/* Value for Quantity */}
                <label htmlFor="valueForQuantity" style={labelStyle}>
                    {labels[language].valueForQuantity}
                </label>
                <select
                    id="valueForQuantity"
                    name="valueForQuantity"
                    value={form.valueForQuantity}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedInput('valueForQuantity')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        cursor: 'pointer',
                        ...(focusedInput === 'valueForQuantity' ? inputFocusStyle : {}),
                    }}
                >
                    <option value="" disabled>
                        {labels[language].chooseRating}
                    </option>
                    <option value="😡 Poor">{language === 'en' ? '😡 Poor' : '😡 மோசம்'}</option>
                    <option value="😐 Average">{language === 'en' ? '😐 Average' : '😐 சராசரி'}</option>
                    <option value="🙂 Good">{language === 'en' ? '🙂 Good' : '🙂 நல்லது'}</option>
                    <option value="😃 Great">{language === 'en' ? '😃 Great' : '😃 சிறந்தது'}</option>
                    <option value="😍 Excellent">{language === 'en' ? '😍 Excellent' : '😍 மிகச் சிறந்தது'}</option>
                </select>


                {/* Food Variety (Select with emojis) */}
                <label htmlFor="foodVariety" style={labelStyle}>{labels[language].foodVariety}</label>
                <select
                    id="foodVariety"
                    name="foodVariety"
                    value={form.foodVariety}
                    onChange={handleChange}
                    required
                    onFocus={() => setFocusedInput('foodVariety')}
                    onBlur={() => setFocusedInput(null)}
                    style={{
                        ...inputBaseStyle,
                        cursor: 'pointer',
                        ...(focusedInput === 'foodVariety' ? inputFocusStyle : {}),
                    }}
                >
                    <option value="" disabled>{labels[language].chooseVariety}</option>
                    <option value="🍽️ Limited">{language === 'en' ? '🍽️ Limited' : '🍽️ குறைவானது'}</option>
                    <option value="🍛 Good">{language === 'en' ? '🍛 Good' : '🍛 நல்லது'}</option>
                    <option value="🍱 Excellent">{language === 'en' ? '🍱 Excellent' : '🍱 சிறந்தது'}</option>
                </select>

                {/* Food Wastage (Radio Buttons) */}
                <label style={labelStyle}>{labels[language].foodWastage}</label>
                <div
                    style={{
                        marginBottom: 30,
                        display: 'flex',
                        gap: 24,
                    }}
                >
                    {['Yes', 'No'].map((option) => {
                        const translatedOption = language === 'en'
                            ? option
                            : option === 'Yes' ? 'ஆம்' : 'இல்லை';

                        return (
                            <label
                                key={option}
                                htmlFor={`foodWastage${option}`}
                                style={{
                                    ...radioLabelStyle,
                                    color: form.foodWastage === option ? '#4a90e2' : '#555',
                                    fontWeight: form.foodWastage === option ? 700 : 600,
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    id={`foodWastage${option}`}
                                    name="foodWastage"
                                    value={option}
                                    checked={form.foodWastage === option}
                                    onChange={handleChange}
                                    style={{ marginRight: 6, cursor: 'pointer' }}
                                    required
                                />
                                {translatedOption}
                            </label>
                        );
                    })}
                </div>

                {/* Wastage Details */}
                {form.foodWastage === 'Yes' && (
                    <textarea
                        name="wastageDetails"
                        placeholder={
                            language === 'en'
                                ? 'Please specify the wastage details'
                                : 'மிகுந்த உணவு மீதி விவரங்களை குறிப்பிடவும்'
                        }
                        value={form.wastageDetails}
                        onChange={handleChange}
                        rows={4}
                        style={{
                            ...inputBaseStyle,
                            resize: 'vertical',
                            ...(focusedInput === 'wastageDetails' ? inputFocusStyle : {}),
                        }}
                        onFocus={() => setFocusedInput('wastageDetails')}
                        onBlur={() => setFocusedInput(null)}
                    />
                )}

                {/* Additional Comments */}
                <textarea
                    name="comments"
                    placeholder={
                        language === 'en'
                            ? 'Additional Comments or Suggestions'
                            : 'கூடுதல் கருத்துகள் அல்லது பரிந்துரைகள்'
                    }
                    value={form.comments}
                    onChange={handleChange}
                    rows={4}
                    style={{
                        ...inputBaseStyle,
                        resize: 'none',
                        ...(focusedInput === 'comments' ? inputFocusStyle : {}),
                    }}
                    onFocus={() => setFocusedInput('comments')}
                    onBlur={() => setFocusedInput(null)}
                />

                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    aria-label="Submit Feedback Form"
                >
                    {language === 'en' ? 'Submit' : 'சமர்ப்பிக்கவும்'}
                </button>

            </form>
        </div>
    );
}
