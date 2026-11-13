import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      {/* TODO: replace with YOUR real information */}
      <StudentProfileCard
        name="Jasper Teo Kheng Cher"
        studentId="202699473"
        major="Computer Engineering"
        year={3}
        gpa={4}
      />
      <StudentProfileCard name="Wong Deng Foong" studentId="202699475" major="Computer Engineering" year={3} gpa={4.0} />
      <StudentProfileCard name="Ryan Wong Guan QI" studentId="202699476" major="Computer Engineering" year={3} gpa={4.0} />
    </div>
  );
}

export default App;
