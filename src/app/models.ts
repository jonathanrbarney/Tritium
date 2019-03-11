export class Account {
  
  id:any;
  bio:any;
  usafa_id:any;
  discus_id:any;
  first_name:any;
  middle_name:any;
  last_name:any;
  dob:any;
  email:any;
  official_email:any;
  official_phone_number:any;
  gender:any;
  room_number:any;
  building:any;
  class_year:any;
  profile_pic:any;
  academic_advisor:any;
  proper_name:any;
  full_name:any;
  email_verified:any;
  phone_verified:any;
  official_email_verified:any;
  official_phone_verified:any;

  constructor(usr){
    for(var k in usr) this[k]=usr[k];
  }
  
};
export class UserSnapshot {
    account_type:any;
    class_year:any;
    email:any;
    first_name:any;
    full_name:any;
    gender:any;
    id:any;
    last_name:any;
    middle_name:any;
    official_email:any;
    profile_pic:any;
    proper_name:any;
    usafa_id:any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class Pft {

    id:any;
    score:any;
    creator:any;
    cadet:any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class Aft {

    id:any;
    score:any;
    creator:any;
    cadet:any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class Board {

    id:any;
    name:any;
    description:any;
    is_archived:any;
    creator:any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class Post {

    id: any;
    vote_score: any;
    num_vote_up:  any;
    num_vote_down: any;
    is_anonymous: any;
    created: any;
    is_archived: any;
    message: any;
    color: any;
    creator: any;
    board: any;
    reply_to: any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class Position {

    id: any;;
    is_cadet_job: any;
    unit: any;
    holder: any;
    supervisor: any[];

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class Unit {

    id: any;;
    name: any;
    members: any[];
    positions: any[];
    commanders: any[];

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class SAMI {

    id: any;;
    score: any;
    cadet: any;
    creator: any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class AMI {

    id: any;;
    score: any;
    cadet: any;
    creator: any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class PAI {

    id: any;;
    score: any;
    cadet: any;
    creator: any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };
  export class Term {

    id: any;;
    name: any;
    from_date: any;
    to_date: any;

    constructor(usr){
      for(var k in usr) this[k]=usr[k];
    }
    
  };