var End=true;
do{
	var list=[[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
	var i=parseInt(Math.random()*5);
	var j=parseInt(Math.random()*5);
	var end=true
	var step=[];
	if(i==0 && j==1){
		j+1;
	}
	do {
		var temp=parseInt(Math.random()*2)?1:-1
		if(parseInt(Math.random()*2)){
			if(list[i+temp] && (list[i+temp][j]==0))
				i+=temp;
			else
				i+=temp*-1
		}
		else{
			if(list[j+temp]==0)
				j+=temp
			else
				j+=temp*-1
			
		}
        // console.log(i,j,list)
        step.push([i,j])
        if(i>=5 || i<0 || j<0 || j>=5 || list[i][j]==1 ||(i==0&&j==1))
        	end=false
        else{
        	list[i][j]+=1;
        }
    } while (end);
    if(step.length>24){
    	console.log(step)
    	End=false
    }
}while();
