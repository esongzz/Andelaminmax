app={

findMinMax: function(val)
{
	var max;
            max=val[0];
            min=val[0];
            
            for(var i=0;i<=val.length;i++)
            
            {
            if(val[i]>max)
            {
                max=val[i];
            }
            if(val[i]<min)
            {
                min=val[i];
            }
            }
            if (max==min)
            {
              return [max];
            }
            return [min,max];



}

}

module.exports=app;
