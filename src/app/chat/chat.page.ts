import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

    messages = [
      {
        user: 'Kevin',
        createdAt: 141242112566,
        msg: 'Oi tudo bem ?'


      },
      {
        user: 'Vini',
        createdAt: 1412421125662,
        msg: 'Tudo otimo'


      },
      {
        user: 'Kevin',
        createdAt: 14124211256634,
        msg: 'A ferramenta ainda está disponivel?'


      }
      
    ];
  
    currentUser = 'Kevin';
    newMsg = '';
    @ViewChild(IonContent) content: IonContent

  constructor() { }

  sendMessage() {
    this.messages.push({
      user: 'Kevin',
      createdAt: new Date().getTime(),
      msg: this.newMsg

    });

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
    
  }
  ngOnInit() {

   
  }
}
