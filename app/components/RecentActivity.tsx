import Image from "next/image";
const RecentActivity = () => {
  // ${id}
  return (
    <div>
      <div>
        <Image
          src={`../projects/project/`}
          width={250}
          height={250}
          alt={`je suis`}
        ></Image>
      </div>
    </div>
  );
};

export default RecentActivity;
