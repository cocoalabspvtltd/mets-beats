import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Track } from 'ngx-audio-player';   
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef;
  msg: any;
  url: any;
  s:any
 audio: HTMLAudioElement = new Audio();
  uuid: any;
  deviceInfo: any
  songUrl: any;
  mssapDisplayTitle = true;
mssapDisablePositionSlider = true;
mssapDisplayRepeatControls = true;
mssapDisplayVolumeControls = true;
mssapDisplayVolumeSlider = false;
  duration: any;
  audioDuration: any;
  flag: any;
  songUrl1:any;
  status: any;
  
  constructor(private router: Router,private domSanitizer: DomSanitizer,private sanitizer: DomSanitizer,private ApiService :ApiService,private http: HttpClient,fb: FormBuilder,private route:Router,private toastr:ToastrService, private deviceService: DeviceDetectorService) {
    this.epicFunction();
this.songUrl='';
  }
  contactForm                     = new FormGroup({
    firstname                       : new FormControl(),
    phone                           : new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(8)]),
    email                           : new FormControl(),
    phone1                          : new FormControl(),
    subject                         : new FormControl(),
    message                         : new FormControl()
  })

  ngOnInit(){
   // this.songUrl1=this.domSanitizer.bypassSecurityTrustUrl('//94.130.113.214:8000/dubtechno')
    this.check();
    //this.play();
  // this. getDeviceId();
   ///this.  generateUUIDV4()
  }
  
  // contact(){ 
  //   console.log(this.contactForm.value)
  //    var formData: any                   = new FormData();
  //    formData.append('name',             this.contactForm.value.firstname);
  //    formData.append('email',            this.contactForm.value.email);
  //    formData.append('message',          this.contactForm.value.message);
  //    formData.append('phone',            this.contactForm.value.phone);
  //    formData.append('subject',          this.contactForm.value.subject);
  //    this.ApiService.Contact(formData).subscribe(
  //      (res:any) => {

  //      console.log('contact',res)
  //      if(res.success==true){
  //        this.contactForm.reset();
  //       this.msg=res.message;
  //      }else{
  //        console.log('error')
       
  //  }
  //  },(error: any)=>{
  //    this.msg=error.error.message;
  //  })
     
  //    }
  epicFunction() {
    //console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo.userAgent);
    //console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
   // console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    //console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
    localStorage.setItem('deviceId',this.deviceInfo.userAgent);
    
  }

play(){
  this.songUrl='';
  let data={device_id:this.deviceInfo.userAgent};
  this.ApiService.Stream(data).subscribe(
           (res:any) => {
            this.url=res.song; console.log('play',this.url)
            this.songUrl=this.url;          
           })
}

// ng build --base-href /mets/ 

check(){
  //audio ended;
  this.ApiService.status().subscribe(
    (res:any) => {
     console.log('status',res);
      if(res.success==true){
        if(res.status==0){
          this.status=0;
        this.play();
       
        }else{
          this.status=1;
          // this.ApiService.radio().subscribe(
          //   (res:any) => {
          //    console.log('status',res);
          //     if(res.success==true){
          //       // this.songUrl=window.URL.createObjectURL(res.url);
          //       this.songUrl1=this.domSanitizer.bypassSecurityTrustUrl(res.url)
          //       // this.songUrl=res;
          //       console.log('link',this.songUrl)
          //     }

          //   })
          









          // let audio=new Audio();
          // audio.src="http://139.84.138.193:8000/mets/stream";
          // audio.load();
          // audio.play()
          

        //   this.ApiService.radio().subscribe(
        //     (res:any) => {
        //       console.log('radio',res);
        // })
        //this.link=this.domSanitizer.bypassSecurityTrustResourceUrl(this.courseList.embaded_url);
      //   let url='www.tuneinheart.com';
      //  //this.songUrl=this.domSanitizer.bypassSecurityTrustUrl(url);
      //   this.songUrl='http://139.84.138.193:8000/mets/stream';
        // this.songUrl="https://www.tuneinheart.com";
        this.flag=1;
      }
    }
    })
}

}
