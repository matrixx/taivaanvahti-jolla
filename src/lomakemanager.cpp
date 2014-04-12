#include "lomakemanager.h"
#include <QNetworkRequest>
#include <QNetworkReply>

LomakeManager::LomakeManager(QObject *parent) :
    QObject(parent)
{
}

void LomakeManager::haeLomake(const int& id)
{
    QNetworkRequest request;
    request.setUrl(QUrl("https://www.taivaanvahti.fi/api"));
    request.setHeader(QNetworkRequest::ContentTypeHeader, "application/json");
    QString requestString = QString("{\"request\": {\"Action\":\"FormTemplateRequest\",\"Category\":\"%1\"}}").arg(id);

    QNetworkReply *reply = mNam.post(request, requestString.toUtf8());
    connect(reply, &QNetworkReply::finished, this, &LomakeManager::lomakeVastaanotettu);
}

void LomakeManager::lomakeVastaanotettu()
{
    QNetworkReply *reply = qobject_cast<QNetworkReply*>(sender());
    QString replyString = QString::fromUtf8(reply->readAll());
    emit lomakeSaatavilla(replyString);
}
