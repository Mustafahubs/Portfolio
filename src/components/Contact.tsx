import React, { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../assets/styles/Contact.scss';

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1535854914222432258/BuhiS3PJveUhEU9Vr_XZQCbIgPtcgoDFPE3o4gX44XMROipTcQTiyj2XCnZ9X_IZETh4";

type Status = 'idle' | 'sending' | 'sent' | 'error';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [website, setWebsite] = useState(''); // honeypot field, must stay empty
    const [status, setStatus] = useState<Status>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (website) {
            // Honeypot tripped — silently pretend success without sending anything.
            setStatus('sent');
            return;
        }

        setStatus('sending');
        try {
            const rawContent = `**New portfolio message**\n**From:** ${name} (${email || 'no email given'})\n**Message:** ${message}`;
            const content = rawContent.length > 1900 ? `${rawContent.slice(0, 1897)}...` : rawContent;

            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            });

            if (!response.ok) throw new Error('Discord webhook rejected the request');

            setStatus('sent');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="container" id="contact">
            <div className="items-container contact_wrapper">
                <h2>Get In Touch</h2>
                <p className="contact-intro">
                    Have a project in mind, or just want to say hi? Reach out directly below, or use the form —
                    it's delivered straight to my Discord.
                </p>

                <div className="contact-channels">
                    <a href="mailto:ghulammustafapy@gmail.com" className="contact-channel">
                        <EmailIcon /> ghulammustafapy@gmail.com
                    </a>
                    <a href="https://wa.me/447426767993" target="_blank" rel="noreferrer" className="contact-channel">
                        <FaWhatsapp /> WhatsApp
                    </a>
                    <a href="https://t.me/self_mustafa" target="_blank" rel="noreferrer" className="contact-channel">
                        <FaTelegramPlane /> Telegram
                    </a>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-flex">
                        <TextField
                            label="Your Name"
                            name="name"
                            variant="outlined"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Your Email (optional)"
                            name="email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <TextField
                        label="Message"
                        name="message"
                        variant="outlined"
                        required
                        multiline
                        minRows={4}
                        className="body-form"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {/* Honeypot: hidden from real visitors via CSS, bots that auto-fill every field will trip it */}
                    <input
                        type="text"
                        name="website"
                        className="honeypot-field"
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    <Button type="submit" variant="contained" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </Button>
                    {status === 'sent' && <p className="form-status form-status-success">Thanks — your message is on its way.</p>}
                    {status === 'error' && <p className="form-status form-status-error">Something went wrong. Please email me directly instead.</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
