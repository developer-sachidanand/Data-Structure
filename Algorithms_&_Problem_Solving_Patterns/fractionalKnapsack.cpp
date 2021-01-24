#include<bits/stdc++.h>

using namespace std;

struct Item{
    int value , weight;

    Item(int value,int weight):value(value),weight(weight){}
};

bool compare(struct Item a, struct Item b)
{
    // PbyW = profit/weight ... profitbyweight

    double PbyW1 = (double)a.value/(double)a.weight;
    double PbyW2 = (double)b.value/(double)b.weight;

    return PbyW1 > PbyW2;
}

double fractionalKnapsack(int W, struct Item arr[],int n){

    // sorting items taking nlogn time complexity
    sort(arr,arr+n,compare);

    int curWeight = 0;
    double FinalValue = 0.0;

    for(int i=0;i<n;i++){
        if(curWeight + arr[i].weight <= W){
            curWeight += arr[i].weight;
            FinalValue += arr[i].value;
        }
        else{
            int remain = W - curWeight;
            FinalValue += arr[i].value
                        * ((double)remain/(double)arr[i].weight);
            
            break;
        }
    }

    return FinalValue;
}

int main(){
    int W = 50; // Knapsack Container Limit
    Item arr[] = {{6,4},{9,11},{1,5},{11,8},{13,11},{14,15}};
    int n = sizeof(arr)/sizeof(arr[0]);

    // calling the function here

    cout<<"Maximized Profit Obtained is: "<<fractionalKnapsack(W,arr,n);
    return 0;
}