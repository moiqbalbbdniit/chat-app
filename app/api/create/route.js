import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server"; // ✅ Correct import

export async function POST(request) {
    const serverClient = StreamChat.getInstance(
        process.env.NEXT_PUBLIC_STREAM_API_KEY,
        process.env.STREAM_API_SECRET
    );

    const user = await request.json();
    const token = serverClient.createToken(user.data.id);
    console.log("User token has been generated:", token);

    const client = await clerkClient();
    // Update user metadata
    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: { token: token },
    });

    await serverClient.upsertUser({
        id: user.data.id,
    });

    const slugs = [
        "javascript-new",
        "python-new",
        "reactjs-new",
        "nodejs-new",
        "java-new",
        "cpp-new",
        "css-new",
    ];

    for (const slug of slugs) {
        const formattedName = slug.replace(/-/g, " ").toUpperCase() + " Discussion";

        const channel = serverClient.channel("messaging", slug, {
            image: "https://getstream.io/random_png/?name=react",
            name: formattedName,
            created_by_id: user.data.id, // ✅ Fixed
        });

        await channel.create(); // ✅ Ensure `await` is used properly
        await channel.addMembers([user.data.id]); // ✅ Ensure `await` is used properly
    }

    return Response.json({ message: "Channels created successfully!" });
}
