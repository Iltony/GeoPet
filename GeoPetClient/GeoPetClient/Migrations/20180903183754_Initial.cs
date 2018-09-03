using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GeoPetClient.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Owner",
                columns: table => new
                {
                    Mail = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Owner", x => x.Mail);
                });

            migrationBuilder.CreateTable(
                name: "Pet",
                columns: table => new
                {
                    Email = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Race = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Birthdate = table.Column<DateTime>(nullable: false),
                    IsLost = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pet", x => new { x.Email, x.Name });
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Owner");

            migrationBuilder.DropTable(
                name: "Pet");
        }
    }
}
