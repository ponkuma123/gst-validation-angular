import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;


  class1(event)
  {
    
    let name=event.target.value;
    var count=name.length;
    var inp = String.fromCharCode(event.keyCode);
    count++

    // if(/[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/.test(name))
    // {
    //   console.log(true)

    // }
    var el = document.getElementById('inp');
        
        el.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace" || key === "Delete") {
          count--          
        }
    });
    console.log(count);
// if(/[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/.test
    if(count<=2)
    {
      if (/[0-9]/.test(inp))
      {
        return true
      }
      else{
        return false
      }
    }
    else if(count>2 && count<=7)
    {
      if (/[A-Z]/.test(inp))
      {
        return true
      }
      else{
        return false
      }
    }
    else if(count>7 && count<=11)
    {
      if (/[0-9]/.test(inp))
      {
        return true
      }
      else{
        return false
      }
    }
    else if(count==12)
    {
      if (/[A-Z]/.test(inp))
      {
        return true
      }
      else{
        return false
      }
    }
    else if(count==13)
    {
      if (/[1-9A-Z]/.test(inp))
      {
        return true
      }
      else{
        return false
      }
    }
    else if(count==14)
    {
      if(event.keyCode==90)
      {
        return true
      }
      else {
        return false
      }
    }
    else if(count==15)
    {
      if (/[1-9A-Z]/.test(inp))
      {
        return true
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }
}
