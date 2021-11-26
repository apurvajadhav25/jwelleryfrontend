import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

      // Variable to store shortLink from api response
      shortLink: string = "";
      loading: boolean = false; // Flag variable
      file: string // Variable to store file
      | undefined  // Variable to store file
      message: string='';
      imageName: string='';
      retrieveResonse: any;
      retrievedImage: any;
      base64Data: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

          // On file Select
          onChange(event: any) {
            this.file = event.target.files[0];
        }

  onUpload() {
  //  this.loading = !this.loading;
    console.log(this.file);
    const uploadImageData=new FormData();
    this.productService.upload(this.file)
   // this.http.post('http://localhost:8080/uploadFile', uploadImageData, { observe: 'response' })
  
        .subscribe(
        (r) => {
          console.log(r)
         /* if (response.status == 200) {
                        this.message = 'Image uploaded successfully';
           console.log("success");
                    } else {
           
                      this.message = 'Image not uploaded successfully';
            
                    }*/
            }
        
    );
  }  

}
