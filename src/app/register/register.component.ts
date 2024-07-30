import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Person, RegisterDto } from './registerDto';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent
{
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new RegisterDto()

  submitted = true;

  onSubmit() { this.submitted = true;
    console.log(this.model);
    
   }

  newHero()
  {
    this.model = new RegisterDto();
  }
}
export class Hero
{

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }

}
