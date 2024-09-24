import { PrismaClient } from "@prisma/client";

import { hashPassword } from "../src/utils";

const prisma = new PrismaClient();

async function main() {
    const hashPass = await hashPassword("123456");

    const superAdminAccount = await prisma.account.upsert({
        where: {
            email: "admin@wru.vn",
        },
        update: {},
        create: {
            id: BigInt(1),
            email: "admin@wru.vn",
            password: hashPass,
            role: "superadmin",
        },
    });

    console.log({ superAdminAccount });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
    });
