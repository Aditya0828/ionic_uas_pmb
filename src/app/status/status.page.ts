import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  public allData: any = [];
  public searchTerm: string = "";

  constructor() {}

  ngOnInit() {
    this.getData();
  }


  handleRefresh(event: any) {
    setTimeout(() => {
      this.getData();
      event.target.complete();
    }, 2000);
  }


  async getData() {
    try {

      const response: any = await axios.get('https://praktikum-cpanel-unbin.com/api_adityaa/api_uass/get_data_mahasiswa%20%282%29.php');


      if (response.data && response.data.result) {
        this.allData = response.data.result;
      } else {
        console.error('Data not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  ffilterData() {
    if (this.searchTerm.trim() !== "") {
      this.allData = this.allData.filter((item: any) => {
        return item.nama_lengkap.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.getData();
    }
  }
}
