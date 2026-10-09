"use client";

import {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contactform() {
	const form = useRef(); /* react */
	const refCaptcha = useRef();
	const refSuccess = useRef();
	const [status, setStatus] = useState(""); /*"sending", "sent" or "error"*/

	const {
		register /*register fields -react-hook-form*/,
		handleSubmit /*validation -react-hook-form*/,
		formState: {errors},
		reset /*reset form -react-hook-form*/,
	} = useForm();

	/*move focus to the confirmation so screen readers announce it and it is on screen*/
	useEffect(() => {
		if (status === "sent") refSuccess.current?.focus();
	}, [status]);

	const onSubmit = () => {
		/*hidden trap field: people never see it, spam programs fill it in, so pretend it worked and send nothing*/
		if (form.current?.elements.website?.value) {
			reset();
			setStatus("sent");
			return;
		}
		if (!refCaptcha.current?.getValue()) {
			setStatus("captcha");
			return;
		}
		setStatus("sending");

		emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(
			() => {
				reset();
				setStatus("sent");
			},
			(error) => {
				console.log("email did not send, error", error.text);
				refCaptcha.current?.reset(); /*a captcha answer works once, so ask for a fresh one*/
				setStatus("error");
			},
		);
	};

	return (
		<div className="contactForm">
			<fieldset>
				<legend>Contact me</legend>
				<div className="inputDesign">
					{status === "sent" ? (
						<div className="form-success" role="status" tabIndex={-1} ref={refSuccess}>
							<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
								<circle cx="12" cy="12" r="10" />
								<path d="M7.5 12.5l3 3 6-6.5" />
							</svg>
							<h3>Message sent</h3>
							<p>Thank you for contacting me! I will return your message when I receive it.</p>
							<button type="button" className="form-again" onClick={() => setStatus("")}>
								Send another message
							</button>
						</div>
					) : (
						<form ref={form} onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label htmlFor="name">Name</label>
								<input type="text" id="name" placeholder="Name" {...register("from_name", {required: true, maxLength: 150})} />
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input id="email" placeholder="email@gmail.com" type="email" {...register("from_email", {required: true, pattern: /^\S+@\S+$/i})} aria-invalid={errors.from_email ? "true" : "false"} />
							</div>
							<div>
								<label htmlFor="message">Comments/Questions</label>
								<textarea id="message" placeholder="Send me an email" type="text" {...register("message")} />
							</div>
							<div className="hp-field" aria-hidden="true">
								<label htmlFor="website">Leave this field empty</label>
								<input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
							</div>
							{status === "error" && (
								<p className="form-error" role="alert">
									Something went wrong and your message was not sent. Please try again.
								</p>
							)}
							{status === "captcha" && (
								<p className="form-error" role="alert">
									Please tick the "I'm not a robot" box below, then press Submit again.
								</p>
							)}
							<button className="contact" type="submit" value="Submit" disabled={status === "sending"}>
								{status === "sending" ? "Sending…" : "Submit"}
							</button>
							<div className="captcha-center">
								<ReCAPTCHA ref={refCaptcha} sitekey={process.env.NEXT_PUBLIC_SITE_KEY} onChange={() => status === "captcha" && setStatus("")} />
							</div>
						</form>
					)}
				</div>
			</fieldset>
		</div>
	);
}

export default Contactform;
