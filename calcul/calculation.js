
function strserch(input, c)
{
	if (typeof input === 'undefined')
        return false;
	i = 0;
	while (input[i])
	{
		if (input[i] === c)
			return (true);
		i++;
	}
	return (false);
}

function calculator(a, sign, b)
{
	sum = 0;
	if (sign === '*')
		sum = a * b;
	else if (sign === '/')
		sum = a / b;
	return sum;
}

function power_first(input)
{
	i = -1;
	num = 0;
	num2 = 0;
	sume = 0;
	j = 0;
	sign = 0;
	input = String(input);
	split = input.split(/([+-])/); // 5+5*3+2 == 5 + 5*3 + 2
	while (split[++i])
	{
		j = 0;
		if (strserch(split[i], '/') == true || strserch(split[i], '*') == true)
		{
			while (split[i][j] >= 0 && split[i][j] <= 9)
			{
				num = num + split[i][j] - '0';
				j++;
			}
			sign = split[i][j++];
			while (split[i][j] < '0' || split[i][j] > '9')
			{
				if (split[i][j] === '-')
					sign = '-';
				else if (split[i][j] === '*' || split[i][j] === '/')
					return ("not valid yet");
				j++;
			}
			while (split[i][j] >= 0 && split[i][j] <= 9)
			{
				num2 = num2 + split[i][j] - '0';
				j++;
			}
			if (sign === '*')
				sume = num * num1;
			else if (sign === '/')
				sume = num / num1;
		}
	}
	input = input.replace(split[i], String(sume));
	console.log(input);
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
	
	if (strserch(input, '*') == true || strserch(input, '/') == true)
		input = power_first(input);
	while (input[i] >= '0' && input[i] <= '9')
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
        output.value = '';
    else if (value === '=')
	{
        output.value = parser(output.value);
		some = 0;
    }
    else
        output.value += value;
}
