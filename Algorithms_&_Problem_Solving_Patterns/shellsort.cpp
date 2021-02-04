#include<bits/stdc++.h>
using namespace std;

int shellSort(int arr[],int n){
    for(int gap = n/2;gap>0;gap /= 2){
        
        for(int i = gap;i<n;i++){

            int temp = arr[i];
            int j;

            for(j = i;j>=gap && arr[j-gap] > temp; j -= gap){
                arr[j] = arr[j-gap];
                arr[j-gap] = temp;
            }
        }
    }
}

void printArray(int arr[],int n){
    for (int i = 0; i < n; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}

int main(){
    int arr[] = {12,34,54,2,3};
    int n = sizeof(arr)/sizeof(arr[0]);
    cout<<"the array before sorting"<<endl;
    printArray(arr,n);
    shellSort(arr,n);
    cout<<"The array after sorting"<<endl;
    printArray(arr,n);
}