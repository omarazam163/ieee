

function getMaxLen(arr)
{
    if(arr.length == 0)
    {
        return null;
    }

    let max = 0;
    let el='';
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].length > max)
        {
            max = arr[i].length;
            el = arr[i];
        }
        else if(arr[i].length === max)
        {
            if(el<=arr[i]) el = arr[i];
            else el = el;
        }
    }
    return el;
}

console.log(getMaxLen(['a','bbb','ccc']));

