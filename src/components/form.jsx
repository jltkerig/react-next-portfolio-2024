"use client";

import {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contactform() {
	const form = useRef(); /* react */
	const refCaptcha = useRef();
	const [status, setStatus] = useState(""); /*"sent" or "error" after submit*/

	const {
		register /*register fields -react-hook-form*/,
		handleSubmit /*validation -react-hook-form*/,
		formState: {errors},
		reset /*reset form -react-hook-form*/,
	} = useForm();

	const onSubmit = (data) => {
		// Handle form submission

		console.log(data);
		console.log(errors);

		emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY).then(
			() => {
				console.log("email sent");
				reset();
				setStatus("sent");
			},
			(error) => {
				console.log("email did not send, error", error.text);
				setStatus("error");
			},
		);
	};

	return (
		<div className="contactForm">
			<fieldset>
				<legend>Contact me</legend>
				<div className="inputDesign">
					<form ref={form} onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="name">Name</label>
							<input type="text" id="name" placeholder="Name" {...register("from_name", {required: true, maxLength: 150})} />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<input id="email" placeholder="email@gmail.com" type="email" {...register("from_email", {required: true, pattern: /^\S+@\S+$/i})} aria-invalid={errors.mail ? "true" : "false"} />
						</div>
						<div>
							<label htmlFor="message">Comments/Questions</label>
							<textarea id="message" placeholder="Send me an email" type="text" {...register("message")} />
						</div>
						<button className="contact" type="submit" value="Submit">
							Submit
						</button>
						{status === "sent" && <p className="form-status">Thank you for contacting me! I will return your message when I receive it.</p>}
						{status === "error" && <p className="form-status">Something went wrong, please try again.</p>}
						<div className="captcha-center">
							<ReCAPTCHA ref={refCaptcha} sitekey={process.env.NEXT_PUBLIC_SITE_KEY}/>
						</div>
					</form>
				</div>
			</fieldset>
		</div>
	);
}

export default Contactform;
