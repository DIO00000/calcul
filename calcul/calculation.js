
// function strserch(input, c)
// {
// 	if (typeof input === 'undefined')
// return false;
// 	i = 0;
// 	while (input[i])
// 	{
// 		if (input[i] === c)
// 			return (true);
// 		i++;
// 	}
// 	return (false);
// }

// function power_calculer(a, sign, b)
// {
// 	sum = 0;
// 	if (sign === '*')
// 		sum = a * b;
// 	else if (sign === '/')
// 		sum = a / b;
// 	return sum;
// }

// function power_first(input)
// {
// 	i = -1;
// 	num = 0;
// 	sume = 0;
// 	j = 0;
// 	sign = 0;
// 	input = String(input);
// 	split = input.split(/([+*/-])/); // 5+5*2*2*3+2 == 5 + 5*2*2 3 + 2
// 	while (split[++i])
// 	{
// 		j = 0;
// 		if (strserch(split[i], '/') == true || strserch(split[i], '*') == true)
// 		{
// 			while (split[i][j] >= 0 && split[i][j] <= 9)
// 			{
// 				sume = sume + split[i][j] - '0';
// 				j++;
// 			}
// 			while (split[i][j])
// 			{
// 				sign = split[i][j++];
// 				while (split[i][j] < '0' || split[i][j] > '9')
// 				{
// 					if (split[i][j] === '-')
// 						sign = '-';
// 					else if (split[i][j] === '*' || split[i][j] === '/')
// 						return ("not valid yet");
// 					j++;
// 				}
// 				while (split[i][j] >= 0 && split[i][j] <= 9)
// 				{
// 					num = num + split[i][j] - '0';
// 					j++;
// 				}
// 				sume = power_calculer(sume, sign, num)
// 			}
// 			input = input.replace(new RegExp(split[i], 'g'), String(sume));
// 		}
// 	}
// 	console.log(input);
// 	return input
// }
var some = 0;

function power_calculer(operator, num2)
{

}

function calculator(sign, b)
{
	if (sign === '+')
		some += b;
	else if (sign === '-')
		some -= b;
}

function parser(input) {
    let num = 0;
    let sign = '+';
    let i = 0;
    some = 0;

    while (i < input.length)
	{
		console.log("HII");
        while (input[i] >= '0' && input[i] <= '9')
		{
            num = num * 10 + (input[i] - '0');
            i++;
        }
        if (input[i] === '*' || input[i] === '/')
		{
            let j = i + 1;
            let nextNum = 0;
            while (input[j] >= '0' && input[j] <= '9')
			{
                nextNum = nextNum * 10 + (input[j] - '0');
                j++;
            }
            if (input[i] === '*')
				num = num * nextNum;
			else
				num = num / nextNum;
            i = j;
        }
        calculator(sign, num);
        num = 0;
        sign = input[i++];
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
