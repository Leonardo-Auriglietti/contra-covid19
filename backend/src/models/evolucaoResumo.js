module.exports = (sequelize, DataTypes) => {
  const EvolucaoResumo = sequelize.define('EvolucaoResumo', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nomeMunicipio: {
      type: DataTypes.STRING(12),
      validate: {
        notEmpty: true,
        isNull: false,
      },
    },
    qtdSuspeito: {
      type: DataTypes.INTEGER,
      validate: {
        isNull: false,
      },
    },
    qtdConfirmado: {
      type: DataTypes.INTEGER,
      validate: {
        isNull: false,
      },
    },
    qtdDescartado: {
      type: DataTypes.INTEGER,
      validate: {
        isNull: false,
      },
    },
    qtdCura: {
      type: DataTypes.INTEGER,
      validate: {
        isNull: false,
      },
    },
    qtdObito: {
      type: DataTypes.INTEGER,
      validate: {
        isNull: false,
      },
    },
    qtdEncerrado: {
      type: DataTypes.INTEGER,
      validate: {
        isNull: false,
      },
    },
  });
  return EvolucaoResumo;
};
