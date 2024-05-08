
function strserch(input, c)
{
	i = -1;
	while (input[++i])
	{
		if (input[i] === c)
		return (true);
	}
	return (false);
}


function power_first(input)
{
	i = -1;
	num = 0;
	num2 = 0;
	sume = 0;
	j = 0;
	sign = 0;
	split = input.split('+');
	while (split[++i])
	{
		if (strserch(input, '/') == true || strserch(input, '*') == true)
		{
			while (input[i] >= 0 && input[i] <= 9)
			{
				num = num + input[i] - '0';
				i++;
			}
			sign = input[i++];
			while (input[i] < '0' || input > '9')
			{
				if (input[i] === '-')
					sign = '-';
				else if (input[i] === '*' || input[i] === '/')
					return ("not valid yet");
				i++;
			}
			while (input[i] >= 0 && input[i] <= 9)
			{
				num2 = num2 + input[i] - '0';
				i++
			}
			if (sign === '*')
				sume = num * num1;
			else if (sign === '/')
				sume = num / num1;
			input = input.replace(split[i], sume);
		}
	}
	return input
}
var some = 0;

function calculator(sign, b)
{
	if (sign === '+')
		some += b;
	else if (sign === '-')
		some -= b;
}

function parser(input)
{
	num = 0;
	sign = 0;
	i = 0;
	
	while (strserch(input, '*') == true || strserch(input, '/') == true)
		input = power_first(sign, num);
	while (input[i] >= '0' && input <= '9')
	{
		some = some + input[i] - '0';
		i++;
	}
	while (input[i])
	{
		sign = input[i++];
		while (input[i] < '0' || input > '9')
		{
			if (input[i] === '-')
				sign = '-';
			else if (input[i] === '*' || input[i] === '/')
				return ("not valid yet");
			i++;
		}
		num = 0;
		while (input[i] >= '0' && input[i] <= '9')
		{
			num = num + input[i] - '0';
			i++;
		}
		calculator(sign, num);
	}
	return some;
}

function print_calul(value)
{
    output = document.getElementById('out');
    if (value === 'c')
        output.value = '0';
    else if (value === '=')
	{
        output.value = parser(output.value);
    }
    else
        output.value += value;
}
