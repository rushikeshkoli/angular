import { Component, OnInit } from '@angular/core';
import {Auth, Storage} from 'aws-amplify'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';
  file1Upload: File = null
  file2Upload: File = null

  handleFile1Input(files: FileList) {
    this.file1Upload = files[0]
  }

  handleFile2Input(files: FileList) {
    this.file2Upload = files[0]
  }

  handleClickNoAuth() {
    const filename = `${Date.now()}-${this.file1Upload.name}`
    Storage.put(filename, this.file1Upload).then(() => {
      console.log('file1 uploaded')
    })
  }

  handleClickAuth() {
    const filename = `${Date.now()}-${this.file2Upload.name}`
    Storage.put(filename, this.file2Upload, {
      bucket: 'fiverr-private-660829820053'
    }).then(() => {
      console.log('file2 uploaded')
    })
  }

  handleLogin() {
    Auth.signIn('fiverr', 'Password#1').then(() => {
      alert('login successfull')
    })
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
