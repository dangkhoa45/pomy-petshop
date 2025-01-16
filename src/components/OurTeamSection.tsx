import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Nguyễn Hoàng Nam",
    role: "Chuyên Gia Chăm Sóc Thú Cưng",
    description:
      "Với hơn 5 năm kinh nghiệm trong lĩnh vực chăm sóc và huấn luyện thú cưng, tôi luôn tận tâm mang đến sự an tâm và hạnh phúc cho các bạn nhỏ bốn chân.",
    image: "https://i.pravatar.cc/150?img=11",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Trần Thu Hằng",
    role: "Nhà Thiết Kế Spa Thú Cưng",
    description:
      "Tôi chuyên thiết kế các dịch vụ spa như tắm rửa, massage và làm đẹp, giúp thú cưng của bạn luôn khỏe mạnh và tự tin.",
    image: "https://i.pravatar.cc/150?img=16",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Lê Quang Huy",
    role: "Bác Sĩ Thú Y",
    description:
      "Tôi đảm bảo sức khỏe cho thú cưng của bạn thông qua các dịch vụ khám chữa bệnh, tiêm phòng và tư vấn dinh dưỡng chuyên sâu.",
    image: "https://i.pravatar.cc/150?img=8",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Phạm Thanh Trúc",
    role: "Quản Lý Dịch Vụ",
    description:
      "Tôi giúp điều phối và đảm bảo chất lượng dịch vụ chăm sóc thú cưng, mang lại sự hài lòng tối đa cho khách hàng.",
    image: "https://i.pravatar.cc/150?img=9",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
];

function OurTeamSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-pink-500">
            Đội Ngũ Của Chúng Tôi
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Chúng tôi là những chuyên gia tận tâm, đầy sáng tạo và không ngừng
            học hỏi để mang lại giá trị tốt nhất cho khách hàng.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src={member.image}
                  width={200}
                  height={200}
                />

                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{member.role}</h3>
                  <p className="mb-4 text-gray-600">{member.description}</p>

                  <div className="inline-flex space-x-4">
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-pink-500"
                      >
                        <FaFacebookF size={20} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-pink-500"
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-pink-500"
                      >
                        <FaLinkedinIn size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeamSection;
