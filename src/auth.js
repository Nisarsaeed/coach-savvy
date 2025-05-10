import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_AUTH_ID,
      clientSecret: process.env.DISCORD_CLIENT_AUTH_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    // Redirect the user to the checkout page after successful login
    async redirect({ url, baseUrl }) {
      if (url === '/api/auth/signin') {
        return '/checkout';
      }
      return '/checkout'; // Redirect to the checkout page
    },
    // Add user email and name to the session
    async session({ session, token }) {
      session.user.email = token.email; // Pass email to session
      session.user.name = token.name; // Pass name to session
      return session;
    },
    // Extract email and name from the user object during login
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email; // Extract email
        token.name = user.name; // Extract name
      }
      return token;
    },
  },
});
