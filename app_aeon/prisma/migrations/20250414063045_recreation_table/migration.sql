-- CreateTable
CREATE TABLE "User" (
    "id_user" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "reference" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_image" TEXT DEFAULT 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    "id_client" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "Client" (
    "id_client" TEXT NOT NULL,
    "client_first_name" TEXT NOT NULL,
    "client_last_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- CreateTable
CREATE TABLE "Company" (
    "id_company" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "nif_stat" TEXT,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contry" TEXT NOT NULL,
    "webSite" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id_company")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;
