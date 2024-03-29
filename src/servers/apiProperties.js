import supabase from "./supabase";

export async function GetProperties() {
	let { data, count, errors } = await supabase
		.from("properties")
		.select("*", { count: "exact" });

	if (errors) throw new Error("Couldnt be loaded");

	return { data, count };
}

export async function GetOneProperty(propertyid) {
	let { data, error } = await supabase
		.from("properties")
		.select("*")
		.eq("id", propertyid);

	if (error) throw new Error("cant be reached");

	return data;
}

export async function GetImages(id) {
	let { data, error } = await supabase
		.from("imagesProperties")
		.select("*")
		.eq("relationProperties", id);

	if (error) throw new Error("cant be reached");

	return data;
}
