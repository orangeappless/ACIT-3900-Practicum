$('.country').on('change', function (e) {

    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;

    let provinces = [
        '<option disabled selected value="null_value">Select Province</option>',
        '<option value="AB"> Alberta </option>',
        '<option value="BC"> British Columbia </option>',
        '<option value="MB"> Manitoba </option>',
        '<option value="NB"> New Brunswick </option>',
        '<option value="NL"> Newfoundland and Labrador </option>',
        '<option value="NS"> Nova Scotia </option>',
        '<option value="ON"> Ontario </option> ',
        '<option value="PE"> Prince Edward Island </option>',
        '<option value="QC"> Quebec </option>',
        '<option value="SK"> Saskatchewan </option>',
        '<option value="NT"> Northwest Territories </option>',
        '<option value="NU"> Nunavut </option>',
        '<option value="YU"> Yukon </option>'
    ];

    let states = [
        '<option disabled selected value="null_value">Select State</option>',
        '<option value="AL">Alabama</option>',
        '<option value="AK">Alaska</option>',
        '<option value="AZ">Arizona</option>',
        '<option value="AR">Arkansas</option>',
        '<option value="CA">California</option>',
        '<option value="CO">Colorado</option>',
        '<option value="CT">Connecticut</option>',
        '<option value="DE">Delaware</option>',
        '<option value="DC">District Of Columbia</option>',
        '<option value="FL">Florida</option>',
        '<option value="GA">Georgia</option>',
        '<option value="HI">Hawaii</option>',
        '<option value="ID">Idaho</option>',
        '<option value="IL">Illinois</option>',
        '<option value="IN">Indiana</option>',
        '<option value="IA">Iowa</option>',
        '<option value="KS">Kansas</option>',
        '<option value="KY">Kentucky</option>',
        '<option value="LA">Louisiana</option>',
        '<option value="ME">Maine</option>',
        '<option value="MD">Maryland</option>',
        '<option value="MA">Massachusetts</option>',
        '<option value="MI">Michigan</option>',
        '<option value="MN">Minnesota</option>',
        '<option value="MS">Mississippi</option>',
        '<option value="MO">Missouri</option>',
        '<option value="MT">Montana</option>',
        '<option value="NE">Nebraska</option>',
        '<option value="NV">Nevada</option>',
        '<option value="NH">New Hampshire</option>',
        '<option value="NJ">New Jersey</option>',
        '<option value="NM">New Mexico</option>',
        '<option value="NY">New York</option>',
        '<option value="NC">North Carolina</option>',
        '<option value="ND">North Dakota</option>',
        '<option value="OH">Ohio</option>',
        '<option value="OK">Oklahoma</option>',
        '<option value="OR">Oregon</option>',
        '<option value="PA">Pennsylvania</option>',
        '<option value="RI">Rhode Island</option>',
        '<option value="SC">South Carolina</option>',
        '<option value="SD">South Dakota</option>',
        '<option value="TN">Tennessee</option>',
        '<option value="TX">Texas</option>',
        '<option value="UT">Utah</option>',
        '<option value="VT">Vermont</option>',
        '<option value="VA">Virginia</option>',
        '<option value="WA">Washington</option>',
        '<option value="WV">West Virginia</option>',
        '<option value="WI">Wisconsin</option>',
        '<option value="WY">Wyoming</option>'
    ];

    let other = '<option value="Other">Other</option>';

    let province_string = provinces.join();
    let state_string = states.join();

    $('.provincestate').html("");

    if (valueSelected == "Canada") {
        $('.provincestate').html(province_string);
    } else if (valueSelected == "United States") {
        $('.provincestate').html(state_string);
    } else if (valueSelected == "Other") {
        $('.provincestate').html(other);
    }
});

/*
Checks for matching passwords before form submit
Used in registration and user profile edit
*/
$('#password, #passwordConfirm').on('keyup', function () {
    if ($('#password').val() == $('#passwordConfirm').val()) {
        $("#submitRegister").prop('disabled', false);
    } else 
        $("#submitRegister").prop('disabled', true);
});