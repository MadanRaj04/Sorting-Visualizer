function partition(arr,L,R)
{
    hg = arr[R];
    i = L-1;
    for (let j=L;j<R;j++)
    {
        if(arr[j] > hg)
        {
            i++;
            swap(arr,i,j);
        }
    } 
}


function swap(arr,L,R)
{
    tvar = arr[L];
    arr[L] = arr[R];
    arr[R] = tvar;
}

function quicksort(arr,L,R){
    pivot = R;
    if(L<R)
    {
        parti = partition(arr,L,R);
    }
}