/* Sample sign-up form: any submit goes straight to the thank-you page.
   No phone number is needed and nothing is sent anywhere, because the original sign-up service no longer exists. */
function webform_validate(form) {
	window.location.href = 'vip-confirm.html';
	return false;
}
