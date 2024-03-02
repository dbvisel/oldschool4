// import striptags from "striptags";
import { getTeam } from "@/utils/airtable";
import { PersonRecord } from "../types";

const cleanPerson = (data: any): PersonRecord => {
  return {
    id: data.id,
    name: data.fields.Name || "",
    type: data.fields["team or collaborator"],
    title: data.fields.Title,
    image: {
      path: data.imagePath,
      blurPath: data.imagePath,
      alt: data.fields.Name,
      width: data.fields.Attachments[0].width || 200,
      height: data.fields.Attachments[0].height || 200,
    },
    bio: data.fields["Short Bio (50 words)"],
  };
};

const getCleanTeam = async (): Promise<PersonRecord[]> => {
  const team = await getTeam();
  const cleanedTeam = await Promise.all(
    team.map((person: any) => cleanPerson(person))
  );
  return cleanedTeam;
};

export default getCleanTeam;
