function checkPassword(val)
{
    if(val.length < 8)
    {
        console.log('False - Too Short');
        return false;
    }
    else // check whether password matches the strength
    {
        var i;
        var flag = 'false';
        for( i = 0; i < val.length; i++)
        {
            var temp = val[i].charCodeAt();
            console.log(temp);
            if((temp >= 65) && (temp < 90))
            {
                flag = 'true';  // as soon as we found 1 uppercase character, we break the loop
                break;
            }
        }
        // check whether string contains 1 uppercase character
        if(flag == 'false')
        {
            console.log('False - No Uppercase characters');
            return false;
        }
        if(val.indexOf("password") !== -1)
        {
            console.log('False - Contains "password"');
            return false;
        }
    }
    console.log('True');
}

checkPassword("Qwerty123");
