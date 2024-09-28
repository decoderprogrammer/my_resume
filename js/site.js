function FN_InitGlobalButtons() {
	$('.btnQuoteMe').on('click', function () {
		$('html, body').animate(
			{
				scrollTop: $('#contact').offset().top,
			},
			2000
		);
	});

	$('.btnContactMe').on('click', function () {
		$('html, body').animate(
			{
				scrollTop: $('#hero-area').offset().top,
			},
			2000
		);
	});

	$('#msg-text').html('');
}

function FN_InitContactUs() {
	$('#btnSendEmail').on('click', function (event) {
		if ($('#name').val() != null) $('#name').val($('#name').val().trim());
		if ($('#email').val() != null)
			$('#email').val($('#email').val().trim());
		if ($('#msg_subject').val() != null)
			$('#msg_subject').val($('#msg_subject').val().trim());
		if ($('#msg_text').val() != null)
			$('#msg_text').val($('#msg_text').val().trim());

		var form = $('#frmSendEmail');
		form.addClass('was-validated');

		if (form[0].checkValidity() === true) {
			FN_SendContact();
		}

		event.preventDefault();
		event.stopPropagation();
	});
}

function FN_SendContact() {
	$.ajax({
		url: '../contact_mail.php',
		data: {
			name: $('#name').val(),
			email: $('#email').val(),
			msg_subject: $('#msg_subject').val(),
			msg_text: $('#msg_text').val(),
		},
		type: 'POST',
		dataType: 'json',
		success: function (data) {
			if (data == 1) {
				toastr.success(
					'Message sent successfully',
					'Email Send Result'
				);
				FN_ResetForm();
			} else toastr.error('Please try again!', 'Email Send Result');
		},
		error: function () {
			toastr.error('Please try again!', 'Email Send Result');
		},
	});
}

function FN_ResetForm() {
	$('#name').val('');
	$('#email').val('');
	$('#msg_subject').val('');
	$('#msg_text').val('');
	document.getElementById('frmSendEmail').reset();
	$('#frmSendEmail').removeClass('was-validated');
}

function FN_OpenLink(id) {
	switch (id) {
		case 1:
			window.open('http://en.pnu.ac.ir/portal/home/', '_blank');
			break;
		case 2:
			window.open('http://en.urmia.ac.ir/', '_blank');
			break;
		case 3:
			window.open('http://www.matrisco.com/', '_blank');
			break;
		case 4:
			window.open('http://www.ravandcomputer.ir/', '_blank');
			break;
		case 5:
			window.open('http://www.xcexchange.com/', '_blank');
			break;
		case 6:
			window.open('http://enobat.tbzmed.ac.ir/', '_blank');
			break;
		case 7:
			window.open('http://www.teb20.com/', '_blank');
			break;
	}
}
