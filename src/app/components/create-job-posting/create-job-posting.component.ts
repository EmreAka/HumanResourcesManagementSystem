import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/Category";

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.component.html',
  styleUrls: ['./create-job-posting.component.css']
})
export class CreateJobPostingComponent implements OnInit {

  categories: Category[] = [{
    id: 1,
    active: "25000",
    freelancer: "23111",
    title: "Grafik & Tasarım",
    url: "https://res.cloudinary.com/emreaka/image/upload/v1659256812/samples/HRMS/Layer_1_o7pbzp.svg"
  }, {
    id: 2,
    active: "23131",
    freelancer: "123211",
    title: "İnternet Reklamcılığı",
    url: "https://res.cloudinary.com/emreaka/image/upload/v1659257302/samples/HRMS/Background_pswqjo.svg"
  }, {
    id: 3,
    active: "12312",
    freelancer: "52131",
    title: "Yazı & Çeviri",
    url: "https://res.cloudinary.com/emreaka/image/upload/v1659257417/samples/HRMS/Layer_1_1_f1bpl7.svg"
  }, {
    id: 4,
    active: "87543",
    freelancer: "94533",
    title: "Video & Animasyon",
    url: "https://res.cloudinary.com/emreaka/image/upload/v1659257602/samples/HRMS/sadasdsa_agwbiz.svg"
  }, {
    id: 5,
    active: "8732",
    freelancer: "69842",
    title: "Ses & Müzik",
    url: "https://res.cloudinary.com/emreaka/image/upload/v1659257691/samples/HRMS/sadasdasdasxz_wrxr1c.svg"
  }, {
    id: 6,
    active: "125213",
    freelancer: "213112",
    title: "Yazılım & Teknoloji",
    url: "https://res.cloudinary.com/emreaka/image/upload/v1659257740/samples/HRMS/sadsadxxxx_jlgqts.svg",
  }, {
    id: 7,
    active: "2134123",
    freelancer: "1231",
    title: "İş & Yönetim",
    url: "https://res.cloudinary.com/emreaka/image/upload/v1659257826/samples/HRMS/xasxaxa_y88mmf.svg"
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  getStyle(id: number){
    if (id == 5){
      return "box-shadow: 0px 0px 20px 1px #3E497A;"
    }
    return ""
  }

}
