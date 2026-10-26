import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  onNameClick(name: string): void {
    alert(`Você clicou em ${name}`);
  }
}