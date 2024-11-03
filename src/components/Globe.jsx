import IconCloud from "magic-ui";
 // Import directly from the installed package

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", 
  "android", "html5", "css3", "nodedotjs", "express", "nextdotjs", 
  "prisma", "amazonaws", "postgresql", "firebase", "nginx", "vercel", 
  "testinglibrary", "jest", "cypress", "docker", "git", "jira", 
  "github", "gitlab", "visualstudiocode", "androidstudio", "sonarqube", "figma"
];

const IconCloudContainer = () => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IconCloudContainer;