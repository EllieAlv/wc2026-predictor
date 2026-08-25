import { Group } from "../../components/models/group";

export async function getGroupsData(): Promise<Group[]> {
  const apiGatewayUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
   
  try {
    const response = await fetch(`${apiGatewayUrl}/groups.json`);
            
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const groups: Group[] = await response.json();    
    return groups;
  } catch (err) {
    return [];
  }
}

export async function getGroupGames(): Promise<Group[]> {
  const apiGatewayUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
  return [];
}