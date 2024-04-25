interface SanityBody {
    _id: string;
    _updatedAt: string;
    _createdAt: string;
_rev:j3DPQv37LPF63ekg1ilnXE
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference"
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
export interface Experience extends SanityBody {
    _type: "experience";
    companyImage: Image;
    company: string;
    image: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolen;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}
export interface Project extends SanityBody {
    title: string;
    _type: "skill";
    image: Image;
    linkToBuild: string;
    summary: number;
    technologies: Technology[];
}



export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}