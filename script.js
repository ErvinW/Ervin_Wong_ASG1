function AudioItems(name, build, app, anc, batt, ipx,
    con, desc, purhclink, imglink){
        this.name = name;
        this.build = build;
        this.app = app;
        this.anc = anc;
        this.batt = batt;
        this.ipx = ipx;
        this.con = con;
        this.desc = desc;
        this.purhclink = purhclink;
        this.imglink = imglink;
        this.audioItemProfile = function(){
            return `${this.name} Build: ${this.build}, App: ${this.app}, ANC: ${this.anc}, Battery: ${this.batt}, IPX: ${this.ipx}, 
            Connection: ${this.con}, ${this.desc}, ${this.purhclink}, ${this.imglink}`;
        }
    }


    